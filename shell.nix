with (import <nixpkgs> {});
mkShell {
	buildInputs = [
      nodejs
	];
shellHook = ''
    export PATH="./node_modules/.bin:$PATH"
    export DEBUG=http:*
'';
}
