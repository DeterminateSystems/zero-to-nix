#!/usr/bin/env python

from setuptools import setup

setup(
    name='zero-to-nix-python',
    version='0.1.0',
    py_modules=['hello'],
    entry_points={
        'console_scripts': ['zero-to-nix-python = hello:main']
    },
)
