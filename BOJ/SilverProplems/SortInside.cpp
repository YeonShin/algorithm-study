// Silver V Tier Problem : BOJ #1427

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool cmp(int a, int b) {
	return a > b;
}

int main() {
	int length = 1;
	int num;
	vector<int> v;
	cin >> num;
	while (num != 0) {
		v.push_back(num % 10);
		num /= 10;
	}
	sort(v.begin(), v.end(), cmp);

	for (int i = 0; i < v.size(); i++) {
		cout << v[i];
	}
}