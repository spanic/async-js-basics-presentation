function main() {
    let customer = {
        firstName: "Angela",
        lastName: "W. Clark",
    };

    const intervalId = setInterval(() => {
        customer.elapsedTime = (customer.elapsedTime ?? 0) + 1;
        console.log(customer);
    }, 1000);

    /* setTimeout(() => {
        clearInterval(intervalId);
    }, 5000); */
    
    console.log(customer);
}

main();

/*
{ firstName: 'Angela', lastName: 'W. Clark' }
{ firstName: 'Angela', lastName: 'W. Clark', elapsedTime: 1 }
{ firstName: 'Angela', lastName: 'W. Clark', elapsedTime: 2 }
{ firstName: 'Angela', lastName: 'W. Clark', elapsedTime: 3 }
{ firstName: 'Angela', lastName: 'W. Clark', elapsedTime: 4 }
...
*/