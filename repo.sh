#!bin/sh

dpkg-scanpackages -m debs/ > Packages
bzip2 -5fkv Packages > Packages.bz2
xz -5fkev Packages > Packages.xz
xz -5fkev --format=lzma Packages > Packages.lzma
zstd Packages