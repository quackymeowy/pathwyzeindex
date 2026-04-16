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
assert_not_contains "$ROOT_DIR/index.html" 'BigSong Niu'
assert_not_contains "$ROOT_DIR/assets/data/translations.js" "team_3_name: 'BigSong Niu'"
assert_contains "$ROOT_DIR/index.html" 'class="footer-copy text-neutral-500 text-sm"'
assert_contains "$ROOT_DIR/index.html" 'class="footer-link-group"'
assert_contains "$ROOT_DIR/index.html" 'class="footer-meta text-[10px] text-neutral-400"'
assert_contains "$ROOT_DIR/index.html" 'footer-shell py-20 px-6 mt-16 bg-white'
assert_contains "$ROOT_DIR/index.html" 'max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12'
assert_not_contains "$ROOT_DIR/index.html" 'Build systems that compound growth.'
assert_not_contains "$ROOT_DIR/index.html" 'mt-20 pt-8 border-t border-neutral-100'
assert_contains "$ROOT_DIR/assets/styles.css" '.footer-copy {'
assert_contains "$ROOT_DIR/assets/styles.css" '.footer-link-group {'
assert_contains "$ROOT_DIR/assets/styles.css" '.footer-meta {'

printf 'Static smoke checks passed.\n'
