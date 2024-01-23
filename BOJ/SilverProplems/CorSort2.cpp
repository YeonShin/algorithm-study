// Silver V Tier Problem : BOJ #11651

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool cmp(pair<int, int> a, pair<int, int> b) {
	if (a.second == b.second) {
		return a.first < b.first;
	}
	else {
		return a.second < b.second;
	}
}

int main() {
	int N;
	int x, y;
	cin >> N;
	vector<pair<int, int>> cor;

	for (int i = 0; i < N; i++) {
		cin >> x >> y;
		cor.push_back(make_pair(x, y));
	}
	sort(cor.begin(), cor.end(), cmp);

	for (int i = 0; i < N; i++) {
		cout << cor[i].first << " " << cor[i].second << "\n";
	}
}