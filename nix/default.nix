{ inputs, ... }:
{
  imports = [
    inputs.treefmt-nix.flakeModule
  ];
  systems = import inputs.systems;

  perSystem =
    {
      pkgs,
      config,
      ...
    }:
    {
      devShells.default = pkgs.callPackage ./shell.nix {
        treefmt = config.treefmt.build.wrapper;
      };
      checks = {
        inherit (config.packages) default;
      };
      packages.default = pkgs.callPackage ./app.nix { };
      treefmt = {
        projectRootFile = "flake.nix";
        programs = {
          biome.enable = true;
          nixfmt.enable = true;
        };
      };
    };
}
