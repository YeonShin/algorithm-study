#include <iostream>
#include <map>
#include <vector>
using namespace std;

int main() {
	int N, M;
	int num;

	cin >> N;
	map<int, int> cards;
	for (int idx = 0; idx < N; idx++) {
		cin >> num;
		cards.insert(make_pair(num, num));
	}
	cin >> M;
	int* chkValue = (int*)malloc(sizeof(int) * M);
	int* isExist = (int*)malloc(sizeof(int) * M);


	for (int j = 0; j < M; j++) {
		cin >> chkValue[j];
	}
	
	for (int k = 0; k < M; k++) {
		if (cards.find(chkValue[k]) == cards.end()) {
			isExist[k] = 0;
			cout << isExist[k] << " ";
		}
		else {
			isExist[k] = 1;
			cout << isExist[k] << " ";
		}
	}

	free(chkValue);
	free(isExist);


}