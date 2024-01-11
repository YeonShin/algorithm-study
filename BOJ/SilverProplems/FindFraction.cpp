#include <iostream>

using namespace std;

int main() {
	int X, floor = 1;
	cin >> X;
	int k = 1;
	int i = 1;
	int deno = 1, nume = 1;
	while (X > k) {
		floor++;
		i++;
		k = k + i;

	}
	if (floor % 2 == 0) {
		deno = floor;
		for (int j = 1; j < (X - (k - i)); j++) {
			deno--;
			nume++;
		}
	}
	else {
		nume = floor;
		for (int j = 1; j < (X - (k - i)); j++) {
			deno++;
			nume--;
		}
	}
	cout << nume << "/" << deno;

}