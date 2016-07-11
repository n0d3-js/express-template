BIN   := ./node_modules/.bin
PATH  := $(BIN):$(PATH)

main:
	clear
	@echo [main]
	@echo Project: Template

ready:
	@echo [ready]
	@mkdir -p logs

compile-front:
	@echo [compile-front]
	@$(BIN)/webpack

compile-back:
	@echo [compile-back]
	@$(BIN)/babel server -d dst -q

lint:
	@echo [lint]
	@$(BIN)/eslint client server test -f stylish --color

tests:
	@echo [tests]
	@PORT=5555 DB=test-db LEVEL=silly $(BIN)/istanbul cover --print summary $(BIN)/_mocha -- --recursive

watch: all
	@echo [watch]
	@$(BIN)/chokidar 'client/**/*.js' 'server/**/*.js' 'test/**/*.js' -c 'make all'

fast-tests-watch: fast-tests
	@echo [fast-tests-watch]
	@$(BIN)/chokidar 'client/**/*.js' 'server/**/*.js' 'test/**/*.js' -c 'make fast-tests'

fast-tests: main ready compile-back tests

all: main ready compile-front compile-back lint tests
