all: main.min.css

main.min.css: main.css
	python3 -m csscompressor -o $@ $^

main.css: ../sass/main.scss $(shell find ../sass -name *.scss)
	sass $< $@

.PHONY: all
