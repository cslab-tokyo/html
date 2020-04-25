all: lib.min.js main.min.js

lib.min.js: jquery.min.js jquery.scrollex.min.js jquery.scrolly.min.js skel.min.js util.min.js
	cat $^ > $@

util.min.js: util.js
	python3 -m jsmin $^ > $@

main.min.js: main.js
	python3 -m jsmin $^ > $@

.PHONY: all
