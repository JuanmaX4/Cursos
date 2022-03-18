using namespace std;

int main(int argc, char *argv[]){
    int var,num;
    bool indicator;
    indicator = false;

    for (var=1; var <=5; var++){
        cout << "Dime un numero:";
        cin >> num;
        if(num % 2 ==0)
            indicator = true;
    }
    if(indicator)
        cout << "Has introducido un numero par";
    else
        cout << "No has introducido un numero par";
    
    return 0;
}