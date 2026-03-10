#!/usr/bin/env bash
set -euo pipefail

# Validates the most critical CONFIG fields before publish.

CONFIG_FILE="${1:-./config.js}"

if [[ ! -f "$CONFIG_FILE" ]]; then
  echo "ERROR: config file not found: $CONFIG_FILE"
  exit 2
fi

extract_string() {
  local key="$1"
  sed -n "s/^[[:space:]]*${key}:[[:space:]]*\"\([^\"]*\)\",.*/\1/p" "$CONFIG_FILE" | head -n 1
}

required_keys=(
  "title"
  "display"
  "name"
  "phone"
  "email"
)

errors=0

echo "Validating required text fields in $CONFIG_FILE"
for key in "${required_keys[@]}"; do
  value="$(extract_string "$key")"
  if [[ -z "$value" ]]; then
    echo "FAIL: missing value for key '$key'"
    errors=1
  else
    echo "OK: $key"
  fi
done

hero="$(extract_string "hero")"
floor1="$(extract_string "floor1")"
floor2="$(extract_string "floor2")"

check_url_like() {
  local label="$1"
  local value="$2"
  if [[ -z "$value" ]]; then
    echo "WARN: '$label' is empty"
    return
  fi
  if [[ "$value" =~ ^https?:// ]] || [[ "$value" =~ ^/pilot-srubec/assets/ ]]; then
    echo "OK: $label URL/path format"
  else
    echo "FAIL: '$label' has unsupported format: $value"
    errors=1
  fi
}

echo
echo "Validating media fields"
check_url_like "hero" "$hero"
check_url_like "floor1" "$floor1"
check_url_like "floor2" "$floor2"

if [[ "$errors" -ne 0 ]]; then
  echo
  echo "Config validation FAILED"
  exit 2
fi

echo
echo "Config validation PASSED"
