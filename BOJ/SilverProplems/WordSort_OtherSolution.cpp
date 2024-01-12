#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool cmp(string a, string b) {
	if (a.length() == b.length()) {
		return a < b;
	}
	else {
		return a.length() < b.length();
	}
}

int main() {
	vector <string> words;
	int N;
	string word;
	cin >> N;
	for (int i = 0; i < N; i++) {
		cin >> word;
		words.push_back(word);
	}
	sort(words.begin(), words.end(), cmp);

	for (int i = 0; i < N; i++) {
		if (i > 0 && words[i] == words[i - 1]) {
			continue;
		}
		cout << words[i] << "\n";
	}
	return 0;
}