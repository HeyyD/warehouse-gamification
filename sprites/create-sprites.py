from PIL import Image
import os, math, time, sys, zipfile, shutil

sprites_zip = zipfile.ZipFile('Sprites.zip', 'r')

print('Extracting files...')
sprites_zip.extractall()

directories = []
for root, dirs, files in os.walk(os.getcwd()):
    directories.extend(dirs)
    break

for dir in directories:
    print('Creating spritesheet from ' + dir)
    max_frames_row = 10.0
    frames = []
    tile_width = 0
    tile_height = 0

    spritesheet_width = 0
    spritesheet_height = 0

    files = os.listdir(dir + "/")
    files.sort()

    for current_file in files :
        try:
            with Image.open(dir + "/" + current_file) as im :
                frames.append(im.getdata())
        except:
            print(current_file + " is not a valid image")

    tile_width = frames[0].size[0]
    tile_height = frames[0].size[1]

    if len(frames) > max_frames_row :
        spritesheet_width = tile_width * max_frames_row
        required_rows = math.ceil(len(frames)/max_frames_row)
        spritesheet_height = tile_height * required_rows
    else:
        spritesheet_width = tile_width*len(frames)
        spritesheet_height = tile_height
        
    spritesheet = Image.new("RGBA",(int(spritesheet_width), int(spritesheet_height)))

    for current_frame in frames :
        top = tile_height * math.floor((frames.index(current_frame))/max_frames_row)
        left = tile_width * (frames.index(current_frame) % max_frames_row)
        bottom = top + tile_height
        right = left + tile_width
        
        box = (left,top,right,bottom)
        box = [int(i) for i in box]
        cut_frame = current_frame.crop((0,0,tile_width,tile_height))
        
        spritesheet.paste(cut_frame, box)
        
    spritesheet.save("spritesheet_" + dir + ".png", "PNG")
    print('SUCCESS!')

    shutil.rmtree(dir)

print('\nDONE!!')
sprites_zip.close()
