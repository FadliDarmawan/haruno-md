{ pkgs }: {
  deps = [
    pkgs.nodejs
    pkgs.nodePackages.typescript
    pkgs.ffmpeg
    pkgs.imagemagick
    pkgs.git
    pkgs.libuuid
  ];
  env = {
    LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [pkgs.libuuid];
  };
}
