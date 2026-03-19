import sys
from PIL import Image
from collections import Counter

def get_dominant_color(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert('RGB')
        img.thumbnail((100, 100))
        pixels = list(img.getdata())
        
        # Filter out very common backgrounds like pure white or black if possible
        # Or just find the most common colors
        counts = Counter(pixels)
        most_common = counts.most_common(10)
        
        for color, count in most_common:
            hex_color = "#{:02x}{:02x}{:02x}".format(*color)
            print(f"Color: {color} Hex: {hex_color} Count: {count}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    get_dominant_color(r"C:\Users\Compustore\Desktop\steply\steply\src\assets\photo_2026-03-19_01-18-21.jpg")
