# Changes

# Next

- Remove Handler type from handler definitions, it should be internal, REASON: improve DX

# v0.2.5

- Change ViewInterface for View in view interface
- Fix ViewInterface in all examples
- Add keywords to package.json

# v0.2.4

- Add Actions interface to core
- Add Components interface to core
- Make component inputs optional
- Make data parameter optional in Input and Action interfaces
- Add missing types to testForm example
- Update typescript version

# v0.2.3

- Make style group handler containerName parameter optional

# v0.2.2

- Fix type of style group handler
- Fix unused containerName option in style group handler

# v0.2.1

- Fix debugNames and add a debug option to style group handler

# v0.2.0

- Fix bug when call dispatch from a child component
- Add onDispatch event to module definition
- Add onDispatch function to log helpers
- Use onDispatch in testForm example

# v0.1.0

- Add mapToObj helper
- Following SEMVER from this version

# v0.0.10

- Fixed bug in hot-swaping related to edge case in mergeStates
