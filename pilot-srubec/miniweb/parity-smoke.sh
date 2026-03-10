#!/usr/bin/env bash
set -euo pipefail

# Static parity smoke test for pilot-srubec miniweb.
# Compares basic endpoint availability on localhost and Vercel.

LOCAL_BASE="${LOCAL_BASE:-http://localhost:4173/pilot-srubec/miniweb}"
VERCEL_BASE="${VERCEL_BASE:-https://srubec-estate-meveriks-projects.vercel.app}"
DRIVE_FOLDER_URL="${DRIVE_FOLDER_URL:-https://drive.google.com/drive/folders/1zINwdjjZYpOYyF-4J3zyO1cta_t24XEX?usp=drive_link}"
GOOGLE_FONTS_CSS_URL="${GOOGLE_FONTS_CSS_URL:-https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap}"

ENDPOINTS=("/" "/index.html" "/config.js")
EXTERNALS=(
  "$GOOGLE_FONTS_CSS_URL"
  "https://maps.google.com"
)

status_code() {
  local url="$1"
  curl -s -L -o /dev/null -w "%{http_code}" "$url"
}

print_group_header() {
  local title="$1"
  printf "\n== %s ==\n" "$title"
}

check_local_status() {
  local code="$1"
  [[ "$code" == "200" ]]
}

check_vercel_status() {
  local code="$1"
  [[ "$code" == "200" || "$code" == "401" ]]
}

printf "Parity smoke test\n"
printf "LOCAL_BASE=%s\n" "$LOCAL_BASE"
printf "VERCEL_BASE=%s\n" "$VERCEL_BASE"

print_group_header "Local endpoints"
local_fail=0
for ep in "${ENDPOINTS[@]}"; do
  code="$(status_code "${LOCAL_BASE}${ep}")"
  printf "%-14s %s\n" "$ep" "$code"
  if ! check_local_status "$code"; then
    local_fail=1
  fi
done

print_group_header "Vercel endpoints"
vercel_fail=0
for ep in "${ENDPOINTS[@]}"; do
  code="$(status_code "${VERCEL_BASE}${ep}")"
  printf "%-14s %s\n" "$ep" "$code"
  if ! check_vercel_status "$code"; then
    vercel_fail=1
  fi
done

print_group_header "External dependencies"
for url in "${EXTERNALS[@]}"; do
  code="$(status_code "$url")"
  printf "%-40s %s\n" "$url" "$code"
done

print_group_header "Google Drive folder accessibility"
drive_code="$(status_code "$DRIVE_FOLDER_URL")"
printf "%-40s %s\n" "$DRIVE_FOLDER_URL" "$drive_code"

print_group_header "Interpretation"
printf "%s\n" "- Local endpoints should be 200."
printf "%s\n" "- Vercel endpoints should be 200 for public deploy or 401 when deployment protection is enabled."
printf "%s\n" "- Google Drive code 200/301 can still require login for file listing; verify in authenticated browser session."

print_group_header "Parity verdict"
if [[ "$local_fail" -eq 0 ]]; then
  printf "%s\n" "LOCAL: PASS"
else
  printf "%s\n" "LOCAL: FAIL"
fi

if [[ "$vercel_fail" -eq 0 ]]; then
  printf "%s\n" "VERCEL: PASS (or protected)"
else
  printf "%s\n" "VERCEL: FAIL"
fi

if [[ "$local_fail" -ne 0 || "$vercel_fail" -ne 0 ]]; then
  exit 2
fi
