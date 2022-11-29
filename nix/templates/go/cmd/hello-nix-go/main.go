package main

import (
    "net/http"

    "github.com/gin-gonic/gin"
)

func main() {
    r := gin.Default()

    r.GET("/", func(c *gin.Context) {
        c.String(http.StatusOK, "Hello from Nix + Go!")
    })

    r.Run()
}
