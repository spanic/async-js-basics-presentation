function main() {
    let customer = {
        firstName: "Angela",
        lastName: "W. Clark",
    }
    
    setTimeout(() => {
        customer.address = "304 Waterview Lane, Bingham, New Mexico, 87815";
    }, 0);
    
    customer.email = "AngelaWClark@teleworm.us";
    
    console.log(customer);
}

main();

/*
{
  firstName: 'Angela',
  lastName: 'W. Clark',
  email: 'AngelaWClark@teleworm.us'
}
 */