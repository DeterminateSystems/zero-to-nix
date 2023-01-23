extern crate colored;

use colored::*;

fn main() {
    let nix = "Nix".blue();
    let rust = "Rust".red();
    println!("Hello from {} + {}!", nix, rust);
}
