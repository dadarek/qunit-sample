module( 'My validator' );

test( 'It rejects short names', function(){
  equal( false, isValid( 'Bill' ));
});

test( 'It rejects really long names', function(){
  equal( false, isValid( 'Bill Johnson Shmonson Bobson'));
});

test( 'It accepts legit names', function(){
  equal( true, isValid('Bob Johnson'));
});
