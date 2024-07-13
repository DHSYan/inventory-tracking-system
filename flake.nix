{
  description = "Inventory Tracking System";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs, ... } @ inputs: 
  let 
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
  in
  {

      devShells.${system}.default = with pkgs; mkShell {
          packages = [ 
              nodejs
              typescript
              nodePackages.typescript-language-server
          ];
          shellHook = ''
            zsh
            npm i
          '';
      };

  };
}
