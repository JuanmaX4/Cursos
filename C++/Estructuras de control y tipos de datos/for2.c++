using namespace std;

int main(int argc, char *argv[]){
    int num, cont;
    float result;
    result = 1;

    cout << "Dime un numero:" << endl;
    cin >> num >> endl;
    for (cont= 2; cont<=num; cont++){
        result = result * cont;
    }
    
}