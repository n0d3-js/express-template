BIN   := ./node_modules/.bin
PATH  := $(BIN):$(PATH)

main:
	clear
	@echo [main]
	@echo Project: Template

clean:
	@echo [clean]
	@rm -rf coverage dst logs temp
	@mkdir logs temp

compile:
	@echo [compile]
	@$(BIN)/babel src -d dst -q

lint:
	@echo [lint]
	@$(BIN)/eslint src test -f stylish --color

tests:
	@echo [tests]
	@$(BIN)/istanbul cover --print summary $(BIN)/_mocha -- --recursive -R dot

watch: all
	@echo [watch]
	@$(BIN)/chokidar 'src/**/*.js' 'test/**/*.js' -c 'make all'

all: main clean compile lint tests
