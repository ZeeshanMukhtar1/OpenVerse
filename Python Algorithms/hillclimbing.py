def f(x):
    return (x**2)+(5*x)

def hill_climbing(start_x, step_size, num_steps):
    current_x = start_x
    for _ in range(num_steps):
        neighbor_x = current_x + step_size
        if f(neighbor_x) > f(current_x):
            current_x = neighbor_x
    return current_x, f(current_x)

# Parameters
start_x = 2  # Starting point
step_size = 0.1  # Step size for each iteration
num_steps = 100  # Number of iterations

# Run hill climbing
best_x, best_value = hill_climbing(start_x, step_size, num_steps)

print(f"The maximum value of f(x) = -x^2 is at x = {best_x}, f(x) = {best_value}")
