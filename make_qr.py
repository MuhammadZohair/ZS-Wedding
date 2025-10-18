#!/usr/bin/env python3
import sys, segno, pathlib

def main():
    if len(sys.argv) < 2:
        print("Usage: make_qr.py '<text-or-url>' [basename]", file=sys.stderr)
        sys.exit(1)
    data = sys.argv[1]
    base = sys.argv[2] if len(sys.argv) > 2 else "qr"
    qr = segno.make(data, error='M')
    qr.save(f"{base}.svg", border=2)
    try:
        qr.save(f"{base}.png", scale=8, border=2)
    except Exception as e:
        print("PNG generation needs Pillow. Install with: pip install pillow", file=sys.stderr)
        raise
    print(f"Saved {base}.svg and {base}.png")
if __name__ == "__main__":
    main()
