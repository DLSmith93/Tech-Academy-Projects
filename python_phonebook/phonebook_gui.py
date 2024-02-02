#
#   Python Ver.  3.11.1
#
#   Author: Devin Smith
#
#   Purpose: Phonebook application demo. Demonstrating sqlite, tkinter, 
#            OOP, and parent child relationships and guis from tkinter.
#
#   Tested OS: 


from tkinter import *
from tkinter import messagebox
import tkinter as tk

# this is the other python files that need to be imported
import phonebook_func
import phonebook_main


# load gui function
def load_gui(self):

    # defines and formats the text labels for the input boxes in the window
    self.lbl_fname = tk.Label(self.master, text = "firt Name: ")
    self.lbl_fname.grid(row = 0, column = 0, padx = (27, 0), pady = (10, 0), sticky = N+W)
    self.lbl_lname = tk.Label(self.master, text = "last Name: ")
    self.lbl_lname.grid(row = 2, column = 0, padx = (27, 0), pady = (10, 0), sticky = N+W)
    self.lbl_phone = tk.Label(self.master, text = "Phone Number: ")
    self.lbl_phone.grid(row = 4, column = 0, padx = (27, 0), pady = (10, 0), sticky = N+W)
    self.lbl_email = tk.Label(self.master, text = "email: ")
    self.lbl_email.grid(row = 6, column = 0, padx = (27, 0), pady = (10, 0), sticky = N+W)
    self.lbl_user = tk.Label(self.master, text = "User: ")
    self.lbl_user.grid(row = 0, column = 2, padx = (0, 0), pady = (10, 0), sticky = N+W)

    # creates and formats the text input boxes that info will typed into
    self.txt_fname = tk.Entry(self.master, text = "")
    self.txt_fname.grid(row = 1, column = 0, columnspan = 2, padx = (30, 40), pady = (0, 0), sticky = N+E+W)
    self.txt_lname = tk.Entry(self.master, text = "")
    self.txt_lname.grid(row = 3, column = 0, columnspan = 2, padx = (30, 40), pady = (0, 0), sticky = N+E+W)
    self.txt_phone = tk.Entry(self.master, text = "")
    self.txt_phone.grid(row = 5, column = 0, columnspan = 2, padx = (30, 40), pady = (0, 0), sticky = N+E+W)
    self.txt_email = tk.Entry(self.master, text = "")
    self.txt_email.grid(row = 7, column = 0, columnspan = 2, padx = (30, 40), pady = (0, 0), sticky = N+E+W)

    # defines the list box and scrollbar and formats them properly
    self.scrollbar1 = Scrollbar(self.master, orient = VERTICAL)
    self.lstList1 = Listbox(self.master, exportselection = 0, yscrollcommand = self.scrollbar1.set)
    self.lstList1.bind("<<ListboxSelect>>", lambda event: phonebook_func.onSelect(self,event))
    self.scrollbar1.config(command = self.lstList1.yview)
    self.scrollbar1.grid(row = 1, column = 5, rowspan = 7, columnspan = 1, padx = (0, 0), pady = (0, 0), sticky = N+E+S)
    self.lstList1.grid(row = 1, column = 2, rowspan = 7, columnspan = 3, padx = (0, 0), pady = (0, 0), sticky = N+E+S +W)

    # defines and formats all the buttons and calls funcitons to make them work properly
    self.btn_add = tk.Button(self.master, width = 12, height = 2, text = "Add", command = lambda: phonebook_func.addToList(self))
    self.btn_add.grid(row = 8, column = 0, padx = (25, 0), pady = (45, 10), sticky = W)
    self.btn_update = tk.Button(self.master, width = 12, height = 2, text = "Update", command = lambda: phonebook_func.onUpdate(self))
    self.btn_update.grid(row = 8, column = 1, padx = (25, 0), pady = (45, 10), sticky = W)
    self.btn_delete = tk.Button(self.master, width = 12, height = 2, text = "Delete", command = lambda: phonebook_func.onDelete(self))
    self.btn_delete.grid(row = 8, column = 2, padx = (25, 0), pady = (45, 10), sticky = W)
    self.btn_close = tk.Button(self.master, width = 12, height = 2, text = "Close", command = lambda: phonebook_func.ask_quit(self))
    self.btn_close.grid(row = 8, column = 4, columnspan = 1, padx = (15, 0), pady = (45, 10), sticky = E)

    # calls functions to create the database that holds the phonebook info and and refreshes it
    phonebook_func.create_db(self)
    phonebook_func.onRefresh(self)


if __name__ == "__main__":
    pass