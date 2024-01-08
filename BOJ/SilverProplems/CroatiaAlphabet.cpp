#include <iostream>
#include <cstring>
using namespace std;

int main() {
	char str[101] = { 0 };
	int length = 0, count = 0;

	cin >> str;
	length = strlen(str);
	for (int idx = 0; idx < length; idx++) {
		if ((str[idx] >= 'a' && str[idx] <= 'z') || str[idx] == '-' || str[idx] == '=')
		{
			if (str[idx] == 'c' && (str[idx + 1] == '=' || str[idx+1] == '-')) {
				count++;
				idx++;
				continue;
			}

			if (str[idx] == 'd' && str[idx + 1] == 'z' && str[idx + 2] == '=') {
				count++;
				idx += 2;
				continue;
			}
			if (str[idx] == 'd' && str[idx + 1] == '-') {
				count++;
				idx++;
				continue;
			}
			if ((str[idx] == 'l' || str[idx] == 'n') && str[idx + 1] == 'j') {
				count++;
				idx++;
				continue;
			}
			if ((str[idx] == 's' || str[idx] == 'z') && str[idx + 1] == '=') {
				count++;
				idx++;
				continue;
			}

			count++;
		}
		
	}
	std::cout << count;

}