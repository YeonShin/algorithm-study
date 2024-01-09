#include <iostream>
#include <string>
using namespace std;

bool isPattern(int x) {
	int continuous = 0;
	string num;
	num = to_string(x);

	for (int i = num.length() - 1; i >= 0; i--) {
		if (num[i] == '6') {
			continuous++;
		}
		else if (continuous >= 3) {
			return true;
		}
		else if (num[i] != '6') {
			continuous = 0;
		}

	}
	if (continuous < 3) {
		return false;
	}
	else {
		return true;
	}
}

int main() {
	int N, count = 0;
	int i = 666;
	cin >> N;
	
	while (count < N) {
		if (isPattern(i)) {
			count++;
		}
		i++;
	}
	cout << i - 1;
}