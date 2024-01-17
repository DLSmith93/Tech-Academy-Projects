from django.db import models

# Create your models here.

class Account(models.Model):
    first_name = models.CharField(max_length = 60, default = "", blank = True, null = False)
    last_name = models.CharField(max_length = 60, default = "", blank = True, null = False)
    initial_deposit = models.DecimalField(max_digits = 15, decimal_places = 2)

    Accounts = models.Manager()

    def __str__(self):
        return self.first_name + " " + self.last_name
    

TransactionTypes = [('Deposit', 'deposit'), ('Withdrawal', 'Withdrawal')]

class Transaction(models.Model):
    date = models.DateField()
    type = models.CharField(max_length = 10, choices = TransactionTypes)
    amount = models.DecimalField(max_digits = 15, decimal_places = 2)
    description = models.CharField(max_length = 100)
    account = models.ForeignKey(Account, on_delete = models.CASCADE)

    Transactions = models.Manager()