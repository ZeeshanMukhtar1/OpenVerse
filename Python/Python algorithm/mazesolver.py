import random

# Maze dimensions
WIDTH = 20
HEIGHT = 10

# Maze characters
WALL = '#'
PATH = ' '
START = 'S'
END = 'E'
VISITED = '.'

# Directions for moving in the maze (up, down, left, right)
DIRECTIONS = [(-1, 0), (1, 0), (0, -1), (0, 1)]

# Generate a random maze
def generate_maze(width, height):
    maze = [[WALL if random.random() < 0.3 else PATH for _ in range(width)] for _ in range(height)]
    maze[0][0] = START
    maze[height-1][width-1] = END
    return maze

# Display the maze
def display_maze(maze):
    for row in maze:
        print(''.join(row))

# Check if a position is within bounds and is walkable
def is_valid(maze, x, y):
    if 0 <= x < len(maze) and 0 <= y < len(maze[0]):
        return maze[x][y] == PATH or maze[x][y] == END
    return False

# Depth-First Search algorithm to solve the maze
def dfs(maze, x, y, path):
    if maze[x][y] == END:
        return True

    # Mark as visited
    maze[x][y] = VISITED

    # Try moving in all directions (up, down, left, right)
    for dx, dy in DIRECTIONS:
        nx, ny = x + dx, y + dy
        if is_valid(maze, nx, ny):
            path.append((nx, ny))
            if dfs(maze, nx, ny, path):
                return True
            path.pop()

    return False

# Solve the maze and print the path
def solve_maze(maze):
    path = [(0, 0)]
    if dfs(maze, 0, 0, path):
        print("Maze solved! Path:")
        for step in path:
            print(step)
    else:
        print("No solution found!")

if __name__ == "__main__":
    # Generate and display the random maze
    maze = generate_maze(WIDTH, HEIGHT)
    print("Generated Maze:")
    display_maze(maze)

    # Solve the maze and display the path
    solve_maze(maze)

    # Display the maze after solving
    print("\nMaze after solving (with visited path marked):")
    display_maze(maze)
