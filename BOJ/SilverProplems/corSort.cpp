#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
	int N;
	int x, y;
	cin >> N;
	vector<pair<int, int>> v1;

	for (int idx = 0; idx < N; idx++) {
		cin >> x >> y;
		v1.push_back(make_pair(x, y));
	}
	sort(v1.begin(), v1.end());

	for (int idx = 0; idx < N; idx++) {
		cout << v1[idx].first << " " << v1[idx].second << "\n";
	}
}