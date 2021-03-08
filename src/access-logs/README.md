# ACCESS LOGS PARSER

## The exercise

Your goal is to write a nginx log parser:

- the parser has to be a class named `Parser`
- the class's constructor takes one argument: the absolute path to the log file
- the class has one public method `parse` with no arguments that returns an array off parsed logs
- only the default nginx log format should be supported (for now)
