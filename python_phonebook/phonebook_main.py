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
import phonebook_gui


# main frame class using tkinter
class ParentWindow(Frame):
    def __init__(self, master, *args, **kwargs):
        Frame.__init__(self, master, *args, **kwargs)

        # defining mster frame window
        self.master = master
        self.master.minsize(600, 350) #(height, width)
        self.master.maxsize(600, 350)

        # this method will center the window on the users screen
        phonebook_func.center_window(self, 500, 300)
        self.master.title("The Tkinter Phonebook Demo")
        self.master.configure(bg = "#F0F0F0")

        # this methond is used to catch wehter the user clicks in th upper
        # right corner "X"
        self.master.protocol("WM_DELETE_WINDOW", lambda: phonebook_func.ask_quit(self))
        arg = self.master

        # load in the GUI widgets from a seperate module
        phonebook_gui.load_gui(self)


if __name__ == "__main__":

    root =tk.Tk()
    App = ParentWindow(root)
    root.mainloop()