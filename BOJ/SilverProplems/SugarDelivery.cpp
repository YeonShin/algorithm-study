// Silver IV Tier Problem : BOJ #2839

#include <iostream>

using namespace std;

int main() {
	int N;
	int x = 0, y = 0;
	int count = 0;
	cin >> N;
	while (N >= 0) {
		if (N % 5 == 0) {
			count += N / 5;
			cout << count;
			return 0;
		}
		N -= 3;
		count++;
	}
	cout << "-1";
}