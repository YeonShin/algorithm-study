#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool lengthCompare(string a, string b) {
	return a.length() < b.length();
}

int main() {
	int N;
	int start = 0;
	int end = 0;
	bool found = false;
	int length = 1;
	string word;
	cin >> N;
	vector <string> words;
	for (int i = 0; i < N; i++) {
		cin >> word;
		// 벡터 내에 이미 존재하는 단어가 아니라면 추가
		if (find(words.begin(), words.end(), word) == words.end()) {
			words.push_back(word);
		}

	}
	// 문자 길이에 따라 정렬
	sort(words.begin(), words.end(), lengthCompare);

	// 같은 길이의 단어 끼리 사전상 순서에 따라 정렬
	for (int i = 0; i < words.size(); i++) {
				// length와 i번째 단어의 길이가 같고 length 길이의 단어의 시작점인지 확인하고 start 갱신
		if (words[i].length()  == length && found == false) {
			start = i;
			found = true;
		}
		// length보다 긴 단어를 만나면 end 갱신하고 문자열 벡터의 start부터 end까지 사전순으로 정렬
		if (words[i].length() > length) {
			end = i;
			length++;
			found = false;
			i--;
			if (start != end) {
				sort(words.begin() + start, words.begin() + end);
			}
		}
	}
	sort(words.begin() + end, words.end());

	for (int i = 0; i < words.size(); i++) {
		cout << words.at(i) << "\n";
	}
}