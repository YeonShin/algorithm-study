#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(nullptr);

	int N, num;
	vector<int> cards;
	cin >> N;

	while (N--) {
		cin >> num;
		cards.push_back(num);

	}
	sort(cards.begin(), cards.end());
	cin >> N;
	while (N--) {
		cin >> num;
		cout << binary_search(cards.begin(), cards.end(), num) << ' ';
	}
}