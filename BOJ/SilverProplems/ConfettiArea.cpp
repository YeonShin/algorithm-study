#include <iostream>

using namespace std;

int main() {
	int num;
	int left, bottom;
	int drawingPaper[100][100] = { 0 };
	int count = 0;
	cin >> num;
	for (int idx = 0; idx < num; idx++) {
		cin >> left >> bottom;
		for (int i = 0; i < 10; i++) {
			for (int j = 0; j < 10; j++) {
				if (drawingPaper[left + i][bottom + j] == 0) {
					count++;
				}
				drawingPaper[left + i][bottom + j] = 1;
			}
		}
	}
	cout << count;
	
}