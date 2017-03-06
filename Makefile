# This makefile exists to help run tests.
#
# If TEST_UNIX is a non-empty value, runs tests for UNIX sockets. This
# functionality is not in node-websocket-server at the moment.

.PHONY: test

all: 

install:
	npm --save-dev install http
