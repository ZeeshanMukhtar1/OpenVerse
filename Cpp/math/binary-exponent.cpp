#include <cassert>
#include <iostream>

int bin_pow_recursive(int a, int b) {
    if (b == 0) {
        return 1;
    }

    int half_result = bin_pow_recursive(a, b / 2);
    int result = half_result * half_result;
    
    if (b % 2 == 1) {
        result *= a;
    }

    return result;
}

int bin_pow_iterative(int a, int b) {
    int res = 1;
    while (b > 0) {
        if (b & 1) {
            res *= a;
        }
        a *= a;
        b >>= 1;
    }
    return res;
}

int main() {
    int a, b;
    std::cin >> a >> b;
    std::cout << a << " to the power of " << b << " is " << bin_pow_iterative(a, b) << std::endl;
    assert(bin_pow_recursive(a, b) == bin_pow_iterative(a, b));
    return 0;
}
