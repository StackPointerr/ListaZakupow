{ pkgs, lib, config, inputs, ... }:

{
  languages.javascript.enable = true;
  languages.javascript.npm.enable = true;

  services.mongodb.enable = true;

  packages = [pkgs.mongodb-compass];
}
