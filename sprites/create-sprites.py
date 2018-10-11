import zipfile
import os

sprites_zip = zipfile.ZipFile('Sprites.zip', 'r')
current_directory = ''

for element in sprites_zip.namelist():
  directory, filename = os.path.split(element)

  if current_directory != directory:
    current_directory = directory
    print(directory)

sprites_zip.close()