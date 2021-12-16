with (import <nixpkgs> {});
mkShell {
	buildInputs = [
      nodejs
      heroku
	];
shellHook = ''
    export PATH="./node_modules/.bin:$PATH"
    export DEBUG=http:*
    export PORT=3000
'';
}
