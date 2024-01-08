#include <iostream>
#include <string>

using namespace std;

int main() {
	int EA = 0;
	int notGroupWordCount = 0;
	int newIdx = 0;
	string word;

	cin >> EA;

	for (int i = 0; i < EA; i++) {
		cin >> word;
		int idx = 0;
		bool alphabet[26] = { false };
		while (word[idx] != '\0') {
			newIdx = (int)word[idx] - 97;
			if (idx > 0 && alphabet[newIdx] == true && word[idx] != word[idx - 1]) {
				notGroupWordCount++;
				break;
			}
			alphabet[newIdx] = true;
			idx++;
		}
	}
	std::cout << EA - notGroupWordCount;

}