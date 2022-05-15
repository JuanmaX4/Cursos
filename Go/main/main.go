package main

func Hello(name string) string {
	if name == "" {
		return "Hello, world!"
	}

	return "Hello, " + name
}
