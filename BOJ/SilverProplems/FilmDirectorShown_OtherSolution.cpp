#include <iostream>

using namespace std;

int main() {
	int N, count = 0;
	int start = 666, temp;
	cin >> N;
	while (true) {
		temp = start;
		do {
			if (temp % 1000 == 666) {
				count++;
				break;
			}
			temp /= 10;
		} while (temp > 0);
		if (count == N) {
			cout << start;
			break;
		}
		start++;
	}
	return 0;
}