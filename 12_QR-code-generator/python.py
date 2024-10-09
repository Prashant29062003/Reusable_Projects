# generate_qr.py
import qrcode

def generate_qr(data):
    img = qrcode.make(data)
    img.save("qr_code.png")

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        generate_qr(sys.argv[1])
    else:
        print("No data provided to generate QR code")
