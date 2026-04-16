#!/bin/sh

set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)

assert_contains() {
  file_path="$1"
  pattern="$2"

  if ! grep -Fq "$pattern" "$file_path"; then
    printf 'Expected %s to contain: %s\n' "$file_path" "$pattern" >&2
    exit 1
  fi
}

assert_not_contains() {
  file_path="$1"
  pattern="$2"

  if grep -Fq "$pattern" "$file_path"; then
    printf 'Expected %s to not contain: %s\n' "$file_path" "$pattern" >&2
    exit 1
  fi
}

assert_contains "$ROOT_DIR/index.html" './assets/styles.css'
assert_contains "$ROOT_DIR/index.html" './assets/app.js'
assert_contains "$ROOT_DIR/cases.html" './assets/styles.css'
assert_contains "$ROOT_DIR/cases.html" './assets/app.js'

assert_not_contains "$ROOT_DIR/index.html" './v2/'
assert_not_contains "$ROOT_DIR/cases.html" './v2/'
assert_not_contains "$ROOT_DIR/assets/styles.css" '.service-card-featured::after'
assert_contains "$ROOT_DIR/assets/styles.css" '.service-card-featured::before'

printf 'Static smoke checks passed.\n'
