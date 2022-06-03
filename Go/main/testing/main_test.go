package main

import "testing"

func TestHello(t *testing.T) {

	assertCorrectMessage := func(t testing.TB, got, want string) {
		t.helper()

		if got != want {
			t.Errorf("got %s, want %s", got, want)
		}
	}

	t.Run("Test with Juan", func(t *testing.T) {
		want := "Hello, Juan"
		got := Hello("Juan")
		assertCorrectMessage(t, got, want)
	})

	t.Run("Test with Paco", func(t *testing.T) {
		want := "Hello, Paco"
		got := Hello("Paco")
		assertCorrectMessage(t, got, want)
	})

	t.Run("Test without name", func(t *testing.T) {
		want := "Hello, world"
		got := Hello("")
		assertCorrectMessage(t, got, want)
	})
}
